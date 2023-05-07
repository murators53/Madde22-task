import etkinlik1 from './../assets/etkinlik1.png';
import etkinlik2 from './../assets/etkinlik2.png';
import etkinlik3 from './../assets/etkinlik3.png';
import etkinlik4 from './../assets/etkinlik4.png';

export const activites = [
    {
        etkinlikAdi: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
        etkinlikTipi: "TİYATRO",
        konum: "Maximum UNIQ Lounge",
        detay: "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir oyuncu kadrosuyla, Zengin Mutfağı oyunu ile 28 Şubat’ta Ato Congresium sahnesinde.",
        tarih: "7 Eylül Salı 21:15",
        img: etkinlik1,
        color: '#b77cb8'
    },
    {
        etkinlikAdi: "Yasemin Sakallıoğlu",
        etkinlikTipi: "STAND UP",
        konum: "Maximum Uniq Açıkhava",
        detay: "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir oyuncu kadrosuyla, Zengin Mutfağı oyunu ile 28 Şubat’ta Ato Congresium sahnesinde.",
        tarih: "7 Eylül Salı 21:15",
        img: etkinlik2,
        color: '#f19653'
    },
    {
        etkinlikAdi: "Sinema Keyfi: KİN",
        etkinlikTipi: "SİNEMA",
        konum: "Bahçe Fuaye",
        detay: "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir oyuncu kadrosuyla, Zengin Mutfağı oyunu ile 28 Şubat’ta Ato Congresium sahnesinde.",
        tarih: "7 Eylül Salı 21:15",
        img: etkinlik3,
        color: '#f07266'
    },
    {
        etkinlikAdi: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
        etkinlikTipi: "KONSER",
        konum: "Maximum UNIQ Hall",
        detay: "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir oyuncu kadrosuyla, Zengin Mutfağı oyunu ile 28 Şubat’ta Ato Congresium sahnesinde.",
        tarih: "7 Eylül Salı 21:15",
        img: etkinlik1,
        color: '#9fae5d'
    },
    {
        etkinlikAdi: "Sinema Keyfi: Rifkin’s Festival",
        etkinlikTipi: "SİNEMA",
        konum: "Maximum UNIQ Box",
        detay: "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir oyuncu kadrosuyla, Zengin Mutfağı oyunu ile 28 Şubat’ta Ato Congresium sahnesinde.",
        tarih: "7 Eylül Salı 21:15",
        img: etkinlik4,
        color: '#f07266'
    },
]

export interface IActivite {
    etkinlikAdi: string,
    etkinlikTipi: string,
    konum: string,
    detay: string,
    tarih: string,
    img: string,
    color: string
}