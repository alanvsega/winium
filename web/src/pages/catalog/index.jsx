import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWines } from '../../services/wineServices';
import { setWineList } from '../../actions/WineActions';

import WineItem from './Components/WineItem/index';

import './style.css';

export default function Catalog() {
  const wines = useSelector((state) => state.wineList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const SetWines = async () => {
      const wineList = await getWines();
      dispatch(setWineList(wineList.wines));
    };

    SetWines();
  }, [dispatch]);

  return (
    <div className="catalog-container background-main-light">
      <div className="wines-list-container">
        {wines.map((wine) => (
          // eslint-disable-next-line no-underscore-dangle
          <WineItem key={wine._id} wine={wine} />
        ))}
      </div>
      <div className="filter-container background-main-gradient" />
    </div>
  );
}
