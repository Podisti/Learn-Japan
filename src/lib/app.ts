function test(): string {
    return new Date().toDateString();
}

function getRandomInt(min, max): number { //generátor náhodného čísla
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayKata() { // zobrazí znak
    let letters: string[] = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "キャ", "キュ", "キョ", "サ",
        "シ", "ス", "セ", "ソ", "シャ", "シュ", "ショ", "タ", "チ", "ツ", "テ", "ト", "チャ", "チュ",
        "チョ", "ナ", "ニ", "ヌ", "ネ", "ノ", "ニャ", "ニュ", "ニョ", "ハ", "ヒ", "フ", "ヘ", "ホ",
        "ヒャ", "ヒュ", "ヒョ", "マ", "ミ", "ム", "メ", "モ", "ミャ", "ミュ", "ミョ", "ヤ", "ユ", "ヨ",
        "ラ", "リ", "ル", "レ", "ロ", "リャ", "リュ", "リョ", "ワ", "ン", "ガ", "ギ", "グ", "ゲ", "ゴ",
        "ギャ", "ギュ", "ギョ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ジャ", "ジュ", "ジョ", "ダ", "ヂ", "バ",
        "ビ", "ブ", "ベ", "ボ", "ビャ", "ビュ", "ビョ", "パ", "ピ", "プ", "ペ", "ポ", "ピャ", "ピュ",
        "ピョ", "ファ", "フィ", "フェ", "フォ", "ツァ", "ティ", "トゥ", "ウェ", "ウォ"];

    var chosen = letters[getRandomInt(0, letters.length)]

    document.getElementById("display").innerText = chosen;
    document.getElementById("display").style.background = "rgb(179, 171, 248)";
    (<HTMLInputElement>document.getElementById("answer")).value = "";

    (<HTMLInputElement>document.getElementById("button")).setAttribute("onClick", "javascript: checkKata();");
    (<HTMLInputElement>document.getElementById("button")).innerText = "check";
}

function checkKata() {

    let table: { [key: string]: string } = {
        "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
        "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko", "キャ": "kya", "キュ": "kyu", "キョ": "kyo",
        "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so", "シャ": "sha", "シュ": "shu", "ショ": "sho",
        "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to", "チャ": "cha", "チュ": "chu", "チョ": "cho",
        "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no", "ニャ": "nya", "ニュ": "nyu", "ニョ": "nyo",
        "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho", "ヒャ": "hya", "ヒュ": "hyu", "ヒョ": "hyo",
        "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo", "ミャ": "mya", "ミュ": "myu", "ミョ": "myo",
        "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
        "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro", "リャ": "rya", "リュ": "ryu", "リョ": "ryo",
        "ワ": "wa",
        "ン": "n",
        "ガ": "ga", "ギ": "gi", "グ": "gu", "ゲ": "ge", "ゴ": "go", "ギャ": "gya", "ギュ": "guy", "ギョ": "gyo",
        "ザ": "za", "ジ": "ji", "ズ": "zu", "ゼ": "ze", "ゾ": "zo", "ジャ": "ja", "ジュ": "ju", "ジョ": "jo",
        "ダ": "da", "ヂ": "ji", "ヅ": "zu", "デ": "de", "ド": "do",
        "バ": "ba", "ビ": "bi", "ブ": "bu", "ベ": "be", "ボ": "bo", "ビャ": "bya", "ビュ": "byu", "ビョ": "byo",
        "パ": "pa", "ピ": "pi", "プ": "pu", "ペ": "pe", "ポ": "po", "ピャ": "pya", "ピュ": "pyu", "ピョ": "pyo",
        "ファ": "fa", "フィ": "fi", "フェ": "fe", "フォ": "fo",
        "ツァ": "tsa", "ティ": "ti", "トゥ": "tu", "ウェ": "we", "ウォ": "wo"
    }

    if (((<HTMLInputElement>document.getElementById("answer")).value) == table[document.getElementById("display").innerText]) {
        (<HTMLInputElement>document.getElementById("answer")).value = "correct";
        document.getElementById("display").style.background = "lightgreen";
    }
    else {
        (<HTMLInputElement>document.getElementById("answer")).value = table[document.getElementById("display").innerText];
        document.getElementById("display").style.background = "red";
    }
    (<HTMLInputElement>document.getElementById("button")).setAttribute("onClick", "javascript: displayKata();");
    (<HTMLInputElement>document.getElementById("button")).innerText = "next";
}