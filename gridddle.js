function createBaselineGrid(baselineGridHeight) {

    baselineGridHeight = baselineGridHeight - 1;

    var baselineGridContainerStyle = 'top: 0; min-width: 100%; position: absolute; z-index: 999999; display: flex; flex-direction: column;';

    var baselineGridContainer = '<section class="baselineGridContainer"style="' + baselineGridContainerStyle + '"></section>';

    var documentHeight = document.body.scrollHeight;

    var baselineGridStyle = 'display: flex; width: 100%; border-bottom: solid 1px rgba(255, 0, 255, 0.3); margin-top:' + baselineGridHeight + 'px';

    var baselineGrid = '<div class="baselineGrid" style="' + baselineGridStyle + '"></div>';

    document.body.innerHTML += baselineGridContainer;

    document.getElementsByClassName('baselineGridContainer')[0].innerHTML += baselineGrid.repeat(documentHeight / baselineGridHeight);
}
