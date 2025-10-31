handlers.HelloWorld5 = function (args: any, context: any) {
    const name = args && args.name ? args.name : "friend";

    server.AddUserVirtualCurrency({
        PlayFabId: currentPlayerId,
        VirtualCurrency: "GC",
        Amount: 10
    });

    return { message: `Hello5 ${name}! You earned 10 coins.` };
};
