import { useGetReferralEarningQuery } from '@/redux/queries/refer/referAPI';

const useFetchReferEarning = (loggedInUserId:string | null | undefined) => {
    const { data: referData, isSuccess: referIsSuccess } = useGetReferralEarningQuery(loggedInUserId!, { skip: loggedInUserId? false : true });

    return { referData, referIsSuccess }  
}

export default useFetchReferEarning
