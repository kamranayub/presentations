function updateSelection() {
   var fileList = document.getElementById('filelist');
   var selectedFile = fileList.options[fileList.selectedIndex];
   var waveFile = loadFile("errors/data/" + selectedFile.innerText, displayAudioFile);
}

window.onload = function() {
   var waveFile = loadFile("errors/data/tada.wav", displayAudioFile);
}