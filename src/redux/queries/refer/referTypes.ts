export interface ReferLevelEarningType {
  level: number;
  withdrawalDisabledUsers: number;
  withdrawalEnabledUsers: number;
  earning: number;
}

export interface ReferWithdrawalType {
  _id: string;
  wallet?: {
    name: string,
    amount:number
  };
  status: "pending" | "processing" | "failed" | "success";
  amount: number;
  createdAt: string;
}

export interface ReferDashboardAPIType {
  data: {
    success: boolean;
    message:string;
    data:{
        currentEarning: number;
        totalEarning: number;
        totalWithdrawal: number;
        isWithdrawalPermission: boolean;
        referCode: string;
        levelsEarning: ReferLevelEarningType[];
        withdrawalHistory: ReferWithdrawalType[];
    }
  };
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: any;
}

export interface ShortDashboardType{
  totalEarning: number,
  totalWithdrawal: number,
  totalActive: number,
  totalDeactive: number
}