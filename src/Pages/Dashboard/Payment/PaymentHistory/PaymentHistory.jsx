import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const {data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2>Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {payments.map((payment, index)=> <tr key={payment._id}>
        <th>{index + 1}</th>
        <th>${payment.price}</th>
        <th>{payment.transactionId}</th>
        <th>{payment.status}</th>
      </tr>)}
   

    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;