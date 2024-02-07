import React from 'react'

const About = () => {
    return (
        <>
        <div className='mb-8'>
            <p className="font-semibold text-2xl text-green-contrast mb-1">Simulasi Investasi</p>
            <p className="font-light text-gray-600">Fitur ini dapat kamu gunakan untuk mengembangkan XP yang kamu punya.</p>
            <p className="font-light text-gray-600">Kalo kamu lagi pengen dapet XP sambil di tinggal tidur, di invest aja!</p>
        </div>
        <div className='mb-8'>
            <p className="font-semibold text-2xl text-green-contrast mb-1">Cara Kerjanya</p>
            <p className="font-light text-gray-600 mb-3">Kamu tinggal beli aja reksadana menggunakan XP-mu. Nantinya bakal ada beberapa profil risiko yang bisa dipilih :</p>
            <div className='mb-3'>
                <p className="font-semibold text-lg text-yellow-contrast">1. Profil Konservatif</p>
                <p className="font-light text-gray-600 mb-2">Profil risiko konservatif ini seperti bermain aman. Ketika kamu pilih investasi dengan profil risiko konservatif, risiko kehilangan XP-mu lebih rendah. Pada jalur ini, XP-mu akan diinvestasikan ke hal-hal yang stabil dan aman (cenderung kurang berubah-ubah nilainya). Berikut alokasi Investasinya : </p> 
                <div className='mb-4'>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">50%</span> Pasar Uang</p>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">30%</span> Obligasi</p>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">20%</span> Saham</p>
                </div>
                <p className='font-light text-gray-600'>Ibaratnya kayak mengendarai dengan kecepatan rendah, tapi aman dan nyaman. Intinya, ini cocok buat kamu yang lebih suka memastikan uangmu tetap aman tanpa terlalu banyak fluktuasi atau risiko besar.</p>
            </div>
            <div className='mb-3'>
                <p className="font-semibold text-lg text-yellow-contrast">2. Profil Moderat</p>
                <p className="font-light text-gray-600 mb-2">Kalau profil risiko moderat ini seperti berada di jalur tengah. Jadi, ketika kamu pilih investasi dengan profil risiko moderat, risiko kehilangan uangmu nggak terlalu rendah, tapi juga nggak terlalu tinggi. Kamu mau mencoba peluang pertumbuhan, tapi masih ingin menjaga agar risikonya tetap terkendali. Berikut alokasinya : </p> 
                <div className='mb-4'>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">40%</span> Pasar Uang</p>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">40%</span> Obligasi</p>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">20%</span> Saham</p>
                </div>
                <p className='font-light text-gray-600'>Jadi, profil risiko moderat ini seperti berkendara dengan kecepatan yang pas, mengeksplorasi beberapa peluang, tapi tetap dalam kendali.</p>
            </div>
            <div className='mb-3'>
                <p className="font-semibold text-lg text-yellow-contrast">3. Profil Agresif</p>
                <p className="font-light text-gray-600 mb-2">Profil risiko agresif ini seperti bermain dengan api. Jadi, ketika kamu pilih investasi dengan profil risiko agresif, risiko kehilangan uangmu lebih tinggi. Tapi, tunggu dulu, ada alasan di baliknya. Kamu yang memilih profil ini siap mengambil risiko besar untuk mendapatkan potensi keuntungan besar juga. Berikut alokasinya : </p> 
                <div className='mb-4'>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">30%</span> Pasar Uang</p>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">30%</span> Obligasi</p>
                    <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">40%</span> Saham</p>
                </div>
                <p className='font-light text-gray-600'>Jadi, kalau kamu memilih profil risiko agresif, kamu siap untuk mengejar peluang besar, meskipun harus berani menghadapi risiko yang cukup tinggi. Semacam petualangan finansial yang penuh tantangan!</p>
            </div>
        </div>
        <div>
            <p className="font-semibold text-2xl text-green-contrast mb-1">Gimana cara dapetin keuntungannya?</p>
            <p className="font-light text-gray-600 mb-3">Untuk mendapatkan keuntungan investasimu, kamu perlu menjual reksadana yang udah kamu beli menggunakan XP-mu. Tapi buat dapetin keuntungan, kamu harus liat dulu apakah nilai dari reksadanamu sedang naik atau turun. Semakin lama kamu simpan dan tidak menjual reksadanamu, semakin besar pula return value yang kamu bisa dapet. Berikut ini adalah hal-hal yang mempengaruhi perkembangan XP kamu : </p>
            {/* <div className="px-5 py-4 border border-slate-400 rounded-md w-max">
                <p className='font-secondary text-xl italic'>change_value = investment_allocation * (1 + percentage_change / 100)</p>
            </div> */}
            <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">Persentase Perubahan Grafik</span> ketiga Aset (lihat di atas)</p>
            <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">Risiko profil</span> yang dipilih</p>
            <p className='font-light text-gray-600 text-xl'>- <span className="font-bold">Jumlah kursus</span> yang kamu selesaikan dalam satu pekan</p>
        </div>
        </>
    )
}

export default About