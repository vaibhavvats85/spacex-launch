import { useLocation } from 'react-router-dom';
import Button from '../../button/button';

// List of years from 2006 to 2020
const LaunchYearFilters = ({ clickEvent, type }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    let years = [];
    let launchStartYear = 2006;
    const currentYear = new Date().getFullYear();


    while (launchStartYear <= currentYear) {
        years.push(launchStartYear.toString());
        launchStartYear++;
    }
    return years.map((year, index) => {
        const value = {
            val: year,
            id: year
        }
        const activeYear = params.get(type);
        return <Button
            key={index}
            value={value}
            active={activeYear}
            group={type}
            handleClick={(e) => clickEvent(e, type, params)} />
    }
    );
};

export default LaunchYearFilters;