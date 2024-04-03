import { useGetReferralEarningQuery } from '@/redux/queries/refer/referAPI';

const useFetchReferEarning = (loggedInUserId:string) => {
    const { data: referData, isSuccess: referIsSuccess } = useGetReferralEarningQuery(loggedInUserId!);

    return { referData, referIsSuccess }  
}

export default useFetchReferEarning
