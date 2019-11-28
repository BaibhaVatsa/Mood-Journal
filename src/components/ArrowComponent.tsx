import React from 'react';
import PropType from 'prop-types';
import { Fab } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type ArrowProps = {
    handleClick: (direction: number) => void;
    direction: string;
    disabled: boolean;
}

const vanillaArrowStyle = {
    boxShadow: "none", 
    background: "#f4f4f4"
}

const ArrowComponent: React.FC<ArrowProps> = (props: ArrowProps) => {
    const directionNumber = (props.direction === "right") ? 1 : -1;
    return (
        <div>
            <Fab size='large' aria-label='change_date' 
                onClick={() => props.handleClick(directionNumber)}
                disabled={props.disabled}
                style={vanillaArrowStyle}>
                {(directionNumber == 1) ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </Fab>
        </div>
    );
}

ArrowComponent.propTypes = {
    handleClick: PropType.func.isRequired,
    direction: PropType.string.isRequired,
    disabled: PropType.bool.isRequired,
}

export default ArrowComponent;