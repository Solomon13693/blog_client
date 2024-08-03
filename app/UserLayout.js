import '../styles/users/bootstrap.css'
import '../styles/users/style.css'
import '../styles/users/responsive.css'
import '../styles/users/main.css'
import Header from '@/components/header/Header';

const UserLayout = ({ children }) => {


    return (
        <div className="mobile_nav_class jl-has-sidebar page-template-home-grid-full">

            <div className="options_layout_wrapper jl_radius jl_none_box_styles jl_border_radiuss">

                <div className="options_layout_container full_layout_enable_front">

                    <Header />

                    { children }

                </div>

            </div>

        </div>
    );
};

export default UserLayout;
