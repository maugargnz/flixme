let movies = [
    {
      id: '1',
      title: 'Fast and Furious 1',
      subtitle: 'Rápidos y Furiosos 1',
      description: 'Una misteriosa banda de delincuentes se dedica a robar camiones en marcha desde vehículos deportivos. La policía decide infiltrar un hombre en el mundo de las carreras ilegales para descubrir posibles sospechosos.',
      image: 'http://www.coverwhiz.com/content/The-Fast-And-The-Furious.jpg',
      video: 'https://www1843.o0-4.com/token=GTfTGxZ4zWROi34TAA3_Xg/1586258175/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
    },
    {
      id: '2',
      title: 'Fast and Furious 2',
      subtitle: 'Rápidos y Furiosos 2',
      description: 'Brian O’Connor (Paul Walker), un policía caído en desgracia, fue un adicto a la velocidad y ahora está pagando un precio por ello. Tal y como lo ven sus antiguos jefes y los altos mandos del FBI, este agente de incógnito les echó a perder una de las investigaciones más importantes que habían emprendido.',
      image: 'http://www.coverwhiz.com/content/2-Fast-2-Furious.jpg',
      video: 'https://www1756.o0-4.com/token=2m1GYuP4v2RELbTg1-5wRA/1586256384/189.216.0.0/26/8/e8/111f4af60cc6c134ff9fd9d7164f2e88-480p.mp4'
    },
    {
      id: '3',
      title: 'Fast and Furious 3',
      subtitle: 'Rápidos y Furiosos 3',
      description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
      image: 'http://www.coverwhiz.com/content/The-Fast-And-The-Furious-Tokyo-Drift.jpg',
      video: 'https://www1623.o0-4.com/token=nhOzFopnNUpsK0jGye8eGQ/1586256820/189.216.0.0/25/9/9b/7c623453ceda19bb867dd872a9ce59b9-480p.mp4'
    },
    {
      id: '4',
      title: 'Fast and Furious 4',
      subtitle: 'Rápidos y Furiosos 4',
      description: 'El fugitivo Dom Toretto (Vin Diesel) y el detective Brian O’Conner (Paul Walker) vuelven a encontrarse en Los Ángeles, pero sus relaciones no mejoran.',
      image: 'http://www.coverwhiz.com/content/Fast-And-Furious.jpg',
      video: 'https://www586.o0-2.com/token=p9NpmL1sh6-Qe8XNXAWeKg/1586257048/189.216.0.0/26/c/60/fd9fd5e63cf92a31d11ba47b68e7f60c-480p.mp4'
    },
    {
      id: '5',
      title: 'Fast and Furious 5',
      subtitle: 'Rápidos y Furiosos 5',
      description: 'Vin Diesel y Paul Walker vuelven a reunirse en esta franquicia de velocidad explosiva. En esta ocasión, el ex policía Brian O’Conner (Walker) se asociará con el ex convicto Dom Toretto (Diesel) en el lado opuesto de la ley. Ellos se reunirán con Dwayne Johnson, Jordana Brewster, Chris “Ludacris” Bridges, Tyrese Gibson, Sung Kang, Gal Gadot, Matt Schulze, Tego Calderon y Don Omar para esta carrera de alto riesgo.',
      image: 'http://www.coverwhiz.com/content/Fast-Five.jpg',
      video: 'https://www702.o0-2.com/token=hK2f7QRoMtirIiwgS3Rt1w/1586257108/189.216.0.0/28/2/94/10eb62cead0465fb8fc4de0566e45942-480p.mp4'
    },
    {
      id: '6',
      title: 'Fast and Furious 6',
      subtitle: 'Rápidos y Furiosos 6',
      description: 'Tras la victoria de Dom (Vin Diesel) y Brian (Paul Walker) en Río de Janeiro contra una banda de criminales que se dedicaban a robar coches y gracias a los que se embolsaron 100 millones de dólares, nuestros héroes han vividos separados por un tiempo en diferentes partes del mundo.',
      image: 'http://www.coverwhiz.com/content/Fast-And-Furious-6.jpg',
      video: 'https://www2110.o0-5.com/token=q59aWzzAxudnqZ8vFatYew/1586257201/189.216.0.0/27/1/cd/410f1d2739357a132998556e03172cd1-480p.mp4'
    },
    {
      id: '7',
      title: 'Fast and Furious 7',
      subtitle: 'Rápidos y Furiosos 7',
      description: 'De nuevo los problemas les persiguen. Sin conseguir librarse de la mancha de criminales de su ficha. Su pasado de larga trayectoria en las carreras ilegales les perseguirá y deberán hacer frente a las circunstancias de la única forma que saben. Cuando les pongan entre la espada y la pared idearán un plan para escapar del peligro en una trepidante carrera por salvar la vida y limpiar su reputación. Acción, persecuciones y un ritmo frenético en esta nueva entrega.',
      image: 'http://www.coverwhiz.com/content/Fast-And-Furious-7.jpg',
      video: 'https://www2032.o0-5.com/token=UtXNYVC2UZynsOR-T07dTA/1586257301/189.216.0.0/25/d/d9/92f87c4da522459269efe7bea1b50d9d-480p.mp4'
    },
    {
      id: '8',
      title: 'Fast and Furious 8',
      subtitle: 'Rápidos y Furiosos 8',
      description: 'La carrera ha comenzado. Dom Toretto y su equipo volverán en esta ocasión con más ganas de guerra que nunca. No faltarán los excesos de velocidad y la adrenalina a raudales para un filme del que se espera que sea la entrega con más acción de esta saga callejera por excelencia.',
      image: 'http://www.coverwhiz.com/content/The-Fate-Of-The-Furious.jpg',
      video: 'https://www921.o0-2.com/token=qWwL1X8if98By7mM3CrC1w/1586257394/189.216.0.0/62/9/1c/29ed6450cac1ea62cf533167ac8f61c9-480p.mp4'
    },
    {
      id: '9',
      title: 'Hobs',
      subtitle: 'Hobs',
      description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
      image: 'http://www.coverwhiz.com/content/Hobbs-And-Shaw.jpg',
      video: 'https://storage.googleapis.com/emerald-entity-265717.appspot.com/tt6806448_LAT_HD.mp4'
    },
    {
      id: '10',
      title: 'Ellos Viven',
      subtitle: 'Ellos Viven',
      description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
      image: 'https://mismomentosenlaspeliculas.files.wordpress.com/2019/01/ellos-viven.jpg',
      video: 'https://www.youtube.com/watch?v=BRK449yY_Yo'
    }
  ]

  export default movies