import PersonalInformationForm from '../../../components/PersonalInformationForm';
import DashboardPageContainer from '../../../layouts/DashboardPageContainer';

export default function FillSubscription() {
  return (
    <DashboardPageContainer title="Suas Informações">
      <PersonalInformationForm />
    </DashboardPageContainer>
  );
}
