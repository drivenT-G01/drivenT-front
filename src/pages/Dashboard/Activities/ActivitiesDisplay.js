import styled from 'styled-components';
import Section from '../../../components/Dashboard/Section';
import ActivityCard from './ActivityCard';
import useActivities from '../../../hooks/api/useActivities';
import { useContext, useEffect } from 'react';
import ScheduleContext from '../../../contexts/ScheduleContext';

const ActivitiesDisplay = () => {
  const { selectedSchedule } = useContext(ScheduleContext);
  const { activitiesData, activitiesFunction, activitiesLoading } = useActivities();

  useEffect(() => {
    activitiesFunction(selectedSchedule);
  }, [selectedSchedule]);

  return (
    <Container>
      {activitiesLoading ? (
        <>Loading...</>
      ) : (
        <>
          <Section title="Auditório Principal" textcenter>
            <ActivitiesContainer>
              {activitiesData.map(({ id, name, startsAt, endsAt, slots, local }) => {
                return (
                  local === 'AP' && (
                    <ActivityCard
                      key={id}
                      {...{ name, startsAt, endsAt, slots }}
                      isAvailable={slots > 0}
                      sizeFactor={getTimeStampRoundedInHours(startsAt, endsAt)}
                      isSubscribed={false}
                    />
                  )
                );
              })}
            </ActivitiesContainer>
          </Section>
          <Section title="Auditório Lateral" textcenter>
            <ActivitiesContainer>
              {activitiesData.map(({ id, name, startsAt, endsAt, slots, local }) => {
                return (
                  local === 'AL' && (
                    <ActivityCard
                      key={id}
                      {...{ name, startsAt, endsAt, slots }}
                      isAvailable={slots > 0}
                      sizeFactor={getTimeStampRoundedInHours(startsAt, endsAt)}
                      isSubscribed={false}
                    />
                  )
                );
              })}
            </ActivitiesContainer>
          </Section>
          <Section title="Sala de Workshop" textcenter>
            <ActivitiesContainer>
              {activitiesData.map(({ id, name, startsAt, endsAt, slots, local }) => {
                return (
                  local === 'SW' && (
                    <ActivityCard
                      key={id}
                      {...{ name, startsAt, endsAt, slots }}
                      isAvailable={slots > 0}
                      sizeFactor={getTimeStampRoundedInHours(startsAt, endsAt)}
                      isSubscribed={false}
                    />
                  )
                );
              })}
            </ActivitiesContainer>
          </Section>
        </>
      )}
    </Container>
  );
};

const getTimeStampRoundedInHours = (time1, time2) => {
  const time1InMinutes = time1.split(':').reduce((a, c, i) => {
    return a + Number(c) * (!i && 60);
  }, 0);
  const time2InMinutes = time2.split(':').reduce((a, c, i) => {
    return a + Number(c) * (!i && 60);
  }, 0);

  return Math.floor((time2InMinutes - time1InMinutes) / 60);
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActivitiesContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 288px;
  height: 390px;
  padding: 10px 14px;
`;

export default ActivitiesDisplay;
