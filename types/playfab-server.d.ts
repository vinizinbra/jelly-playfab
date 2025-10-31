declare const currentPlayerId: string;

declare namespace server {
    function AddUserVirtualCurrency(request: { PlayFabId: string; VirtualCurrency: string; Amount: number }): void;
    function UpdatePlayerStatistics(request: { PlayFabId: string; Statistics: { StatisticName: string; Value: number }[] }): void;
    function GetPlayerStatistics(request: { PlayFabId: string; StatisticNames: string[] }): { Statistics: { StatisticName: string; Value: number }[] };
    function UpdateUserData(request: { PlayFabId: string; Data: Record<string, string>; Permission?: "Private" | "Public" }): void;
    function GetUserData(request: { PlayFabId: string; Keys: string[] }): { Data: Record<string, { Value: string }> };
    function WritePlayerEvent(request: { PlayFabId: string; EventName: string; Body: any }): void;
}

declare namespace handlers {
    // You’ll define your functions below like:
    // handlers.MyFunction = function(args: any, context: any): any;
}
