import Header from "./components/Header";
import './assets/css/plugins/plugins.min.css';
import './assets/css/vendor/vendor.min.css';
import './App.css';

function App() {
  return (
    <>
    <div class="preloader-activate preloader-active open_tm_preloader">
        <div class="preloader-area-wrap">
            <div class="spinner d-flex justify-content-center align-items-center h-100">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    </div>
    <Header/>
    </>
  );
}

export default App;
