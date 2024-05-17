document.addEventListener("DOMContentLoaded", function() {
  const playlist = document.getElementById("playlist");
  const audioPlayer = document.getElementById("audio-player");
  const btnPlay = document.getElementById("btn-play");
  const btnPause = document.getElementById("btn-pause");
  let currentSongIndex = 0;
  
    const songs = [
      { name: "Titãs - Epitáfio", src: "Titas_Epitafio.mp3" },
      { name: "Roupa Nova - A Viagem", src: "Roupa_Nova_A_Viagem.mp3" },
      { name: "Skank - Resposta", src: "Skank_Resposta.mp3" },
      { name: "Legião Urbana - Monte Castelo", src: "Legiao_Urbana_Monte Castelo.mp3" },
      { name: "Roxette - Joyride", src: "Roxette_Joyride.mp3"},
      { name: "Trilha Sonora - Senhor dos Anéis", src: "Lord of the Rings_Sound of The Shire.mp3"},
      { name: "Pentatonix - Hallelujah", src: "Pentatonix - Hallelujah.mp3"},
      { name: "Maskavo - Um Anjo do Céu", src: "Maskavo - Um Anjo do Ceu.mp3"},
      { name: "Lulu Santos - O último Romântico", src: "Lulu_Santos - O_Ultimo_Romantico.mp3"},
      { name: "Cidade Negra - A Estrada", src: "Cidade Negra - A Estrada.mp3"},
      { name: "Nenhum de Nós - O Astronauta de Mármore", src: "Nenhum de Nos - O Astronauta de Marmore.mp3"},
      { name: "Biquini Cavadão - Vento Ventania", src: "Biquini Cavadao - Vento Ventania.mp3"},
      { name: "", src: ""},
    ];
  
    // Populate playlist
    songs.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = song.name;
      li.addEventListener("click", function() {
        playSong(index);
      });
      playlist.appendChild(li);
    });
  
    // Play button
    btnPlay.addEventListener("click", function() {
      audioPlayer.play();
    });
  
    // Pause button
    btnPause.addEventListener("click", function() {
      audioPlayer.pause();
    });
  
    // Function to play song
    function playSong(index) {
      currentSongIndex = index;
      const song = songs[index];
      audioPlayer.src = song.src;
      audioPlayer.play();
    }
  
    // Listen for song end
    audioPlayer.addEventListener("ended", function() {
      currentSongIndex++;
      if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Loop back to the beginning
      }
      playSong(currentSongIndex);
    });
  });
  