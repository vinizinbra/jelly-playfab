handlers.HelloWorld = function (args, context) {
    var who = (args && args.name) ? args.name : "friend";
    // Example: give 10 coins safely on the server
    server.AddUserVirtualCurrency({
        PlayFabId: currentPlayerId,
        VirtualCurrency: "GC", // use your currency code, e.g., CO/GC
        Amount: 10
    });
    return { message: "Hello " + who + "! 10 coins granted." };
};