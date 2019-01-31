import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const JobsListItem = ({item, onClick}) => (
  <div className='list-item'>
    <ListItem button component='a' onClick={() => onClick(item)}>
      <ListItemText primary={item.title} secondary={item.employment_type} />
    </ListItem>
    <Divider component='li' />
  </div>
);

export default JobsListItem;

JobsListItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
};