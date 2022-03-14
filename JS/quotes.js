const quoteList = [
    {
        quote : '오래도록 전화벨이 울리지 않으면 고장을 의심하게 만드는 것, 그것이 사랑이다.',
        speaker : '양귀자'
    },
    {
        quote : '운명은 용감한 자를 사랑한다.',
        speaker : '버질'
    },
    {
        quote : '당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.',
        speaker : '낸시 설리번'
    },
    {
        quote : '사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다',
        speaker : '생택쥐베리'
    },
    {
        quote : '재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다.',
        speaker : '세르반테스'
    },
    {
        quote : '가진 것에 감사하나, 만족하지는 말자.',
        speaker : '이병형'
    },
    {
        quote : '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
        speaker : 'L.론허바드'
    },
    {
        quote : '컴퓨터가 이해하는 코드는 어떤 바보도 쓸 수 있다. 하지만 훌륭한 프로그래머는 사람이 이해할 수 있는 코드를 쓴다.',
        speaker : '마틴 파울러 (Martin Fowler)',
    },
];
const quote = document.getElementById("quote");
const quoteSpeaker = document.getElementById("quote-speaker");
const randomNum = (Math.floor(Math.random() * quoteList.length));

quote.innerText = `" ${quoteList[randomNum].quote} "`;
quoteSpeaker.innerText = `- ${quoteList[randomNum].speaker} -`;
