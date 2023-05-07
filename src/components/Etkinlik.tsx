import Exclude from './../assets/Exclude.png'
import logo from './../assets/search.png'
import calender from './../assets/calender.png'
import { IActivite } from '../data/data'
import { useEffect, useRef, useState } from 'react'

interface IActiviteProps {
    activites: IActivite[]
}



const Etkinlik: React.FC<IActiviteProps> = ({ activites }) => {
    console.log(activites)
    const [filter, setFilter] = useState<IActivite[]>([]);
    const [filterLocation, setFilterLocation] = useState<boolean>(false)

    useEffect(() => {



    }, [filter])

    console.log("FILTER", filter)
    return (
        <>
            <div className="activite ">
                <div className="activite-header">
                    <img src={Exclude} alt="logo" />
                    <h1>ETKİNLİKLER</h1>
                    <div className="activite-header-menu">
                        <div></div>
                        <ul>
                            <li><a href="#">Tüm Etkinlikler</a></li>
                            <li><a href="#">Tiyatro</a></li>
                            <li><a href="#">Konse</a></li>
                            <li><a href="#">Stand Up</a></li>
                            <li><a href="#">Sinema</a></li>
                            <li><a href="#">Çocuk</a></li>
                        </ul>
                        <div className="input">
                            <img src={logo} alt="" />
                            <input type="text" placeholder='Etkinlik Ara' />
                        </div>
                    </div>
                </div>
                <div className="activite-submenu">
                    <div className="activite-submenu-filter">
                        <i className="fa-solid fa-filter"></i>
                        <span>Filtreler</span>
                        <div className='filters'>
                            <span>Etkinlik Mekanı</span>
                            {
                                activites.map((item: IActivite, i) => {
                                    return (
                                        <div className="filters-check" key={i}>
                                            <input defaultChecked={filterLocation} onChange={(e) => {
                                                if (e.target.checked) {
                                                    setFilter([...filter, item])
                                                    console.log('ICERDEEE', e.target.checked, item, filter)
                                                }
                                                else {
                                                    console.log("TRUEDAN FLASE DONDU", item)
                                                    let tester: any = [];
                                                    filter.filter(test => {
                                                        if (test.konum !== item.konum) {
                                                            console.log('YANI BUNA BTIKADIM', test.konum)
                                                            tester.push(test)
                                                        }
                                                    })
                                                    setFilter(tester)
                                                }
                                            }} value={item.konum} type="checkbox" />
                                            <span>{item.konum}</span>
                                        </div>
                                    )
                                })
                            }
                            <span>Etkinlik tarihi</span>
                            <div className="filters-check">
                                <input type="checkbox" className='ozel' />
                                <span>Güncel Etkinlikler</span>
                            </div>
                            <hr />
                            <div className="filters-check">
                                <input type="checkbox" />
                                <span>Geçmiş Etklinlikler</span>
                            </div>

                        </div>
                    </div>
                    <div className="activite-submenu-date">
                        <img src={calender} alt="" />
                        <span>Takvimde Gör</span>
                    </div>
                </div>
                <div className="activite-card">
                    {filter.length ?
                        filter.map((activite, i) => {
                            const { etkinlikAdi, etkinlikTipi, detay, img, konum, tarih, color } = activite
                            return (
                                <div className='activite-cards' key={i}>
                                    <div className="activite-cards-img">
                                        <div className='activite-cards-img-date'>
                                            <span>{tarih.split(" ")[0]}</span>
                                            <span>{tarih.split(" ")[1]}</span>
                                            <span>{tarih.split(" ")[2]}</span>
                                            <span>{tarih.split(" ")[3]}</span>
                                        </div>
                                        <img src={img} alt="" />
                                        <span className='activite-type' style={{ background: `${color}` }}>{etkinlikTipi}</span>
                                    </div>
                                    <div className="activite-cards-content">
                                        <div className="activite-cards-content-left">
                                            <h4
                                            >{etkinlikAdi}</h4>
                                            <span>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {konum}
                                            </span>
                                            <p>
                                                {detay}
                                                <span>...Daha Fazla</span>
                                            </p>
                                        </div>
                                        <div className="activite-cards-content-right">
                                            <button>Bilet Al</button>
                                            <p>
                                                <i className="fa-solid fa-circle-plus"></i>
                                                <span>
                                                    Takvim Ekle
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :


                        activites.map((activite, i) => {
                            const { etkinlikAdi, etkinlikTipi, detay, img, konum, tarih, color } = activite
                            return (
                                <div className='activite-cards' key={i}>
                                    <div className="activite-cards-img">
                                        <div className='activite-cards-img-date'>
                                            <span>{tarih.split(" ")[0]}</span>
                                            <span>{tarih.split(" ")[1]}</span>
                                            <span>{tarih.split(" ")[2]}</span>
                                            <span>{tarih.split(" ")[3]}</span>
                                        </div>
                                        <img src={img} alt="" />
                                        <span className='activite-type' style={{ background: `${color}` }}>{etkinlikTipi}</span>
                                    </div>
                                    <div className="activite-cards-content">
                                        <div className="activite-cards-content-left">
                                            <h4
                                            >{etkinlikAdi}</h4>
                                            <span>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {konum}
                                            </span>
                                            <p>
                                                {detay}
                                                <span>...Daha Fazla</span>
                                            </p>
                                        </div>
                                        <div className="activite-cards-content-right">
                                            <button>Bilet Al</button>
                                            <p>
                                                <i className="fa-solid fa-circle-plus"></i>
                                                <span>
                                                    Takvim Ekle
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default Etkinlik