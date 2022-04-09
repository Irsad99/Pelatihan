function hitungGrade(mtk, bind, bing, ipa) {
    if (typeof mtk === "string" ||  typeof bind === "string" || typeof bing === "string" || typeof ipa === "string") {
        console.log("Harap mengisi semua dengan nilai number");
    } else if (mtk,bind,bing,ipa == null) {
        console.log("Harap jangan ada nilai yang kosong");
    } else {
        let total = mtk + bind + bing + ipa
        let rata_rata = total / 4
        if (rata_rata >= 0 && rata_rata <= 59) {
            console.log("Rata-rata = " + rata_rata);
            console.log("Grade = E");
        } else if (rata_rata >= 60 && rata_rata <= 69){
            console.log("Rata-rata = " + rata_rata);
            console.log("Grade = D");
        } else if (rata_rata >= 70 && rata_rata <= 79){
            console.log("Rata-rata = " + rata_rata);
            console.log("Grade = C");
        } else if (rata_rata >= 80 && rata_rata <= 89){
            console.log("Rata-rata = " + rata_rata);
            console.log("Grade = B");
        } else if (rata_rata >= 90 && rata_rata <= 100){
            console.log("Rata-rata = " + rata_rata);
            console.log("Grade = A");
        } else {
            console.log("Rata-rata = " + rata_rata);
            console.log("Rata-rata yang diperoleh melampaui batas");
        }
    }
}

hitungGrade(80,90,89,69)
hitungGrade(80,80,"90",100)
hitungGrade()
