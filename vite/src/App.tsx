import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Clock, BookOpen, Settings, Car, Menu, X } from 'lucide-react';
import './index.css';

const Dashboard = () => (
  <div>
    <div className="page-header">
      <h1 className="page-title">Genel Bakış</h1>
    </div>
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-title">Toplam Öğrenci</div>
        <div className="card-value">1,248</div>
      </div>
      <div className="card">
        <div className="card-title">Bugünkü Randevular</div>
        <div className="card-value">42</div>
      </div>
      <div className="card">
        <div className="card-title">Aktif E-Sınavlar</div>
        <div className="card-value">15</div>
      </div>
      <div className="card">
        <div className="card-title">Yaklaşan Direksiyon Sınavı</div>
        <div className="card-value">3 Gün Kaldı</div>
      </div>
    </div>
    
    <div className="page-header" style={{marginTop: '40px'}}>
      <h2 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Son Randevular</h2>
    </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Öğrenci (TC Kimlik)</th>
            <th>Ders Tipi</th>
            <th>Tarih & Saat</th>
            <th>Eğitmen</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ahmet Yılmaz (12345678901)</td>
            <td>Direksiyon</td>
            <td>12 Mayıs, 14:00</td>
            <td>Mehmet Hoca</td>
            <td><span className="badge success">Onaylandı</span></td>
          </tr>
          <tr>
            <td>Ayşe Demir (98765432109)</td>
            <td>Teorik Ders</td>
            <td>12 Mayıs, 16:00</td>
            <td>Zeynep Hoca</td>
            <td><span className="badge warning">Bekliyor</span></td>
          </tr>
          <tr>
            <td>Can Kaya (56473829102)</td>
            <td>Direksiyon</td>
            <td>13 Mayıs, 09:00</td>
            <td>Mehmet Hoca</td>
            <td><span className="badge success">Onaylandı</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const SinavTakvimi = () => (
  <div>
    <div className="page-header">
      <h1 className="page-title">Sınav Takvimi</h1>
      <p style={{color: 'var(--text-muted)', marginTop: '8px'}}>Milli Eğitim Bakanlığı onaylı teorik ve direksiyon sınav tarihleri.</p>
    </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sınav Adı</th>
            <th>Sınav Türü</th>
            <th>Tarih</th>
            <th>Durum</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026 Mayıs Dönemi Sınavı</td>
            <td>E-Sınav (Teorik)</td>
            <td>25 Mayıs 2026</td>
            <td><span className="badge warning">Yaklaşıyor</span></td>
            <td><button style={{padding: '6px 12px', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Düzenle</button></td>
          </tr>
          <tr>
            <td>2026 Mayıs Direksiyon Sınavı</td>
            <td>Direksiyon</td>
            <td>02 Haziran 2026</td>
            <td><span className="badge success">Kayıtlar Açık</span></td>
            <td><button style={{padding: '6px 12px', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Düzenle</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ESinav = () => (
  <div>
    <div className="page-header">
      <h1 className="page-title">E-Sınav Yönetimi</h1>
      <p style={{color: 'var(--text-muted)', marginTop: '8px'}}>Öğrenciler için deneme sınavları oluşturun ve yönetin.</p>
    </div>
    <div className="dashboard-grid">
      <div className="card" style={{borderLeft: '4px solid var(--primary-color)'}}>
        <h3 style={{marginBottom: '10px'}}>Genel Trafik Kuralları Denemesi</h3>
        <p style={{color: 'var(--text-muted)', marginBottom: '15px', fontSize: '0.9rem'}}>50 Soru • 45 Dakika</p>
        <button style={{width: '100%', padding: '10px', background: 'var(--surface-hover)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer'}}>Soruları Düzenle</button>
      </div>
      <div className="card" style={{borderLeft: '4px solid var(--success-color)'}}>
        <h3 style={{marginBottom: '10px'}}>Motor ve Araç Tekniği</h3>
        <p style={{color: 'var(--text-muted)', marginBottom: '15px', fontSize: '0.9rem'}}>50 Soru • 45 Dakika</p>
        <button style={{width: '100%', padding: '10px', background: 'var(--surface-hover)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer'}}>Soruları Düzenle</button>
      </div>
      <div className="card" style={{borderStyle: 'dashed', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
        <span style={{color: 'var(--text-muted)', fontWeight: '500'}}>+ Yeni Deneme Sınavı Ekle</span>
      </div>
    </div>
  </div>
);

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => (
  <>
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Car size={28} />
        <span>Öz Çınar Sürücü Kursu</span>
        <button className="mobile-close-btn" onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>
      <div className="sidebar-nav">
        <NavLink to="/" onClick={toggleSidebar} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/sinav-takvimi" onClick={toggleSidebar} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Calendar size={20} />
          Sınav Takvimi
        </NavLink>
        <NavLink to="/randevular" onClick={toggleSidebar} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Clock size={20} />
          Ders ve Randevular
        </NavLink>
        <NavLink to="/e-sinav" onClick={toggleSidebar} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <BookOpen size={20} />
          E-Sınav Modülü
        </NavLink>
        <NavLink to="/icerik" onClick={toggleSidebar} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Settings size={20} />
          Hakkımızda & Blog
        </NavLink>
      </div>
    </div>
  </>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <div className="mobile-header">
            <button className="mobile-menu-btn" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <span className="mobile-header-title">Öz Çınar Yönetim</span>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sinav-takvimi" element={<SinavTakvimi />} />
            <Route path="/randevular" element={<div className="page-header"><h1 className="page-title">Randevular</h1><p style={{color: 'var(--text-muted)', marginTop: '8px'}}>Öğrenci direksiyon ve teorik ders randevuları.</p></div>} />
            <Route path="/e-sinav" element={<ESinav />} />
            <Route path="/icerik" element={<div className="page-header"><h1 className="page-title">İçerik Yönetimi</h1><p style={{color: 'var(--text-muted)', marginTop: '8px'}}>Blog yazıları, Hakkımızda ve İletişim bilgilerini güncelleyin.</p></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
