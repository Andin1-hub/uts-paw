import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Mading Kampus</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} kegiatan dalam {jumlahKategori} kategori.
        </p>
      )}
      <div className="beranda-grid">
        <div className="card card-rust">
          <h3>Total Kegiatan</h3>
          {loading ? (
            <p>Memuat...</p>
          ) : (
            <p>{items.length} Kegiatan</p>
          )}
        </div>

        <div className="card card-butter">
          <h3>Kategori</h3>
            {loading ? (
              <p>Memuat...</p>
            ) : (
              <p>{jumlahKategori} Kategori</p>
            )}
        </div>

        <div className="card card-navy">
          <h3>Navigasi</h3>
          <Link to="/koleksi">Lihat semua agenda</Link>
        </div>
      </div>
    </section>
  )
}