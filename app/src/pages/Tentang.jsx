import mahasiswa from '../../mahasiswa.json'
import foto from '../assets/foto.jpg'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/Andin1-hub/uts-paw.git'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang</h1>
      <div className="profil">
        <dl>
          <dt>Nama</dt>
          <dd>{nama}</dd>
          <dt>NIM</dt>
          <dd>{nim}</dd>
          <dt>Kelas</dt>
          <dd>{kelas}</dd>
          <dt>Tema</dt>
          <dd>{tema}</dd>
        </dl>
        <img
          src={foto}
          alt={'foto' + nama}
          className="foto-profil"
          style={{
            width: '150px',
            height: '190px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '16px',
            flex:'none',
          }}
        />
      </div>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}