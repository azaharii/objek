// menambah library firebase 
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

// menambah /mengimpor library firestore
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'


// menambah konfigurasi 
const firebaseConfig = {
  apiKey: "AIzaSyBMSsNz6Dgss5vr8vlPbDdKgwOIn3dMBik",
  authDomain: "insancemerlang2025.firebaseapp.com",
  projectId: "insancemerlang2025",
  storageBucket: "insancemerlang2025.firebasestorage.app",
  messagingSenderId: "900746896855",
  appId: "1:900746896855:web:20cfd37822398ef034d792"
};


// inisialisasi firebase
const app = initializeApp(firebaseConfig);

// inisialisasi firestore 
const db = getFirestore(app)

// fungsi untuk menyimpan data ke firestore
export async function tambahData () {
  try {
    // menyimpan data
    const referensiDokumen = await addDoc(collection(db,'siswa'),{
      nama: 'Agus',
      kelas: 'XI RPL'
    }
    )
    // menampilkan pesan berhasil
    console.log ('Berhasil menambah data siswa')
  } catch (e) {
    // menampilkan pesan eorror
    console.log(error)
  }
}
// fungsi untuk mengambil dara siswa dari firestore
export async function daftarSiswa (){
  // referensi ke daftar dokumen siswa
const refDokumen = collection (db,'siswa')

// melakukan permintaan atau query ke referensi daftar dokumen 
const kueri = query(refDokumen, orderBy('nama'))

// menampung data cuplikan kueri
const cuplikanKueri = await getDocs(kueri)

// tampung hasil kueri
let hasilKueri = []

// loop culplikan kueri, simpan ke variabel hasil kueri
cuplikanKueri.forEach((dokumen) => {
  hasilKueri.push({
    nama: dokumen.data().nama,
    kelas: dokumen.data().kelas 
  })
})
// kembalikan nilai daftar sisqa ke pemanggil fungsi 
return hasilKueri
}