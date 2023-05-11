import * as paymentApi from '../../services/paymentApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useProcessPayment() {
  const token = useToken();

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: paymentFunction,
  } = useAsync((paymentData) => paymentApi.processPayment(token, paymentData), false);

  return { payment, paymentLoading, paymentError, paymentFunction };
}
