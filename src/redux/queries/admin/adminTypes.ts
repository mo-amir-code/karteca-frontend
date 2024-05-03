export interface WithdrawalRequestVerificationType{
    withdrawalRequestId: string,
    utrId: string,
    withdrawalStatus: "success" | "failed" | "verified" | "pending" | "processing",
    upi: string
}