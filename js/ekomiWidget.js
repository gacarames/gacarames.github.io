(function () {
    eKomiIntegrationConfig = new Array(
        { certId: 'F53C0C7AC4F705F' }
    );
    if (typeof eKomiIntegrationConfig != "undefined") {
        for (var eKomiIntegrationLoop = 0; eKomiIntegrationLoop < eKomiIntegrationConfig.length; eKomiIntegrationLoop++) {
            var eKomiIntegrationContainer = document.createElement('script');
            eKomiIntegrationContainer.type = 'text/javascript'; eKomiIntegrationContainer.defer = true;
            eKomiIntegrationContainer.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + "//connect.ekomi.de/integration_1629835064/" + eKomiIntegrationConfig[eKomiIntegrationLoop].certId + ".js";
            document.getElementsByTagName("head")[0].appendChild(eKomiIntegrationContainer);
        }
    } else { if ('console' in window) { console.error('connectEkomiIntegration - Cannot read eKomiIntegrationConfig'); } }
})();