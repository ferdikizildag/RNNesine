const express = require('express');
const app = express();
const port = 3000;

app.get('/matches', (req, res) => {
  res.json([
    {
      id: 1,
      leagueName: 'TÜRKİYE SÜPER LİG',
      flag: 'http://localhost:3000/images/triangle.png',
      date: 'Bugün 21:45',
      matches: [
        {
          id: 101,
          name: 'Fenerbahçe-Beşiktaş',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 102,
          name: 'Galatasaray-Trabzon',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 103,
          name: 'Kasımpaşa-Başakşehir',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 104,
          name: 'Kayseri-Ç.Rize',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
      ],
    },
    {
      id: 2,
      leagueName: 'İNGİLTERE PREMİER LİG',
      flag: 'http://localhost:3000/images/circle.png',
      date: 'Yarın 21:30',
      matches: [
        {
          id: 105,
          name: 'M.Utd-Chelsea',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 106,
          name: 'M.City-Everton',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 107,
          name: 'Fulham-Liverpol',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 108,
          name: 'Arsenal-Tottenham',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
      ],
    },
    {
      id: 3,
      leagueName: 'ALMANYA BUNDESLİGA',
      flag: 'http://localhost:3000/images/star.png',
      date: 'Yarın 17:30',
      matches: [
        {
          id: 109,
          name: 'Bayern M.-Dortmund',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 110,
          name: 'Hamburg-Schalke',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 111,
          name: 'W.Bremen-Frankfurt',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
        {
          id: 112,
          name: 'Köln-Mainz',
          ratios: {
            ms1: '2.90',
            ms0: '2.40',
            ms2: '1.50',
            alt: '1.60',
            ust: '1.70',
          },
        },
      ],
    },
  ]);
});

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + '/shapes/' + req.params.image);
});

app.post('/review', (req, res) => {
  setTimeout(() => {
    res.json({success: 'OK'});
  }, 2000);
});

app.listen(port, () => console.log(`Nesine api listening on port ${port}!`));
