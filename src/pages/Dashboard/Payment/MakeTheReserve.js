import { useContext, useCallback, useState } from 'react';
import Section from '../../../components/Dashboard/Section';
import Card from './Card';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import Button from '../../../components/Form/Button';
import useReserveTicket from '../../../hooks/api/useReserveTicket';
import TicketContext from '../../../contexts/TicketContext';
import { toast } from 'react-toastify';

export default function MakeTheReserve() {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [selectedTicketMode, setSelectedTicketMode] = useState(null);

  const { refreshTicket } = useContext(TicketContext);

  const { reserveTicketFunction, reserveTicketLoading } = useReserveTicket();
  const { ticketTypes, ticketTypesLoading } = useTicketTypes();

  const submit = useCallback(async() => {
    try {
      await reserveTicketFunction(selectedTicketType.id);
      toast('Reserva de ticket feita!');
      refreshTicket();
    } catch (error) {
      toast('Não foi possível realizar a reserva do ticket!');
    }
  });

  return (
    <>
      {ticketTypesLoading ? (
        <>Loading</>
      ) : (
        <>
          {!ticketTypes.length ? (
            <>Não existem tickets disponíveis no momento.</>
          ) : (
            <Section title="Primeiro, escolha sua modalidade de ingresso">
              {ticketTypes.map(
                function({ id, isRemote, price }) {
                  const ticketMode = isRemote ? 'Online' : 'Presencial';
                  if (this.modes.includes(ticketMode)) return null;
                  this.modes.push(ticketMode);
                  return (
                    <Card
                      key={id}
                      title={ticketMode}
                      description={`R$ ${price}`}
                      active={selectedTicketMode === ticketMode}
                      onClickHandler={() => {
                        if (ticketMode === selectedTicketMode) return;
                        setSelectedTicketType(isRemote ? { id, price } : null);
                        setSelectedTicketMode(ticketMode);
                      }}
                    />
                  );
                },
                { modes: [] }
              )}
            </Section>
          )}

          {selectedTicketMode === 'Presencial' && (
            <Section title="Ótimo! Agora escolha sua modalidade de hospedagem">
              {ticketTypes.map(
                function({ id, isRemote, includesHotel, price }) {
                  if (isRemote) return null;
                  if (!this.minimumPrice) this.minimumPrice = price;
                  return (
                    <Card
                      key={id}
                      title={includesHotel ? 'Com Hotel' : 'Sem Hotel'}
                      description={`+ R$ ${price - this.minimumPrice}`}
                      active={selectedTicketType?.id === id}
                      onClickHandler={() => setSelectedTicketType({ id, price })}
                    />
                  );
                },
                { minimumPrice: 0 }
              )}
            </Section>
          )}

          {selectedTicketType && (
            <Section
              title={
                <>
                  Fechado! O total ficou <strong>R$ {selectedTicketType.price}</strong>. Agora só confirmar:
                </>
              }
            >
              <Button disabled={reserveTicketLoading} onClick={submit}>
                Reservar Ingresso
              </Button>
            </Section>
          )}
        </>
      )}
    </>
  );
}
