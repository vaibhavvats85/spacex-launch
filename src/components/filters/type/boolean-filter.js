import { useLocation } from 'react-router-dom';
import Button from '../../button/button';

// True/False buttons for Successful Landing and Successful Launch
const BooleanFilters = ({ clickEvent, type }) => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const buttons = ['True', 'False'];
    return buttons.map((val, index) => {
        const active = params.get(type) + type;
        const value = {
            val: val,
            id: val + type
        }
        return <Button
            active={active}
            key={index}
            group={type}
            value={value}
            handleClick={(e) => clickEvent(e, type, params)} />
    });
};

export default BooleanFilters;
