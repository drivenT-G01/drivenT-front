import { useState } from 'react';
import Section from '../../../components/Dashboard/Section';
import Card from './Card';
import useTicketType from '../../../hooks/api/useTicketTypes';
import Button from '../../../components/Form/Button';

export default function MakeTheReserve() {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [selectedTicketMode, setSelectedTicketMode] = useState(null);
  const { ticketTypes, ticketTypesLoading } = useTicketType();

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
                  if (this.modes.includes(ticketMode)) return;
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
                  if (isRemote) return;
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
              <Button>Reservar Ingresso</Button>
            </Section>
          )}
        </>
      )}
    </>
  );
}
