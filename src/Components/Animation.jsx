//Component Used For Animation 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Animation() {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
}
export default Animation
