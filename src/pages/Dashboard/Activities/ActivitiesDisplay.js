import styled from 'styled-components';
import Section from '../../../components/Dashboard/Section';
import ActivityCard from './ActivityCard';

const ActivitiesDisplay = () => {
  return (
    <Container>
      <Section title="Auditório Principal" textcenter>
        <ActivitiesContainer>
          <ActivityCard
            name="Minecraft"
            startsAt="09:00"
            endsAt="10:00"
            slots={10}
            isAvailable={true}
            sizeFactor={1}
            isSubscribed={false}
          />
        </ActivitiesContainer>
      </Section>
      <Section title="Auditório Lateral" textcenter>
        <ActivitiesContainer></ActivitiesContainer>
      </Section>
      <Section title="Sala de Workshop" textcenter>
        <ActivitiesContainer></ActivitiesContainer>
      </Section>
    </Container>
  );
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
