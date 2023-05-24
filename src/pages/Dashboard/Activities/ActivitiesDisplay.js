import styled from 'styled-components';
import Section from '../../../components/Dashboard/Section';

const ActivitiesDisplay = () => {
  return (
    <Container>
      <Section title="Auditório Principal" textCenter>
        <SubSection></SubSection>
      </Section>
      <Section title="Auditório Lateral" textCenter>
        <SubSection></SubSection>
      </Section>
      <Section title="Sala de Workshop" textCenter>
        <SubSection></SubSection>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const SubSection = styled.div`
  border: 1px solid #d7d7d7;
  width: 288px;
  height: 390px;
  padding: 10px 14px;
`;

export default ActivitiesDisplay;
