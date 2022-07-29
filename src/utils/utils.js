const getInitials = name => {
    const names = name.split(" ");
    if (names.length === 1) return names[0][0];
    else if (name.length > 1) return `${names[0][0]}${names[1][0]}`;
    return 'A';
}

const responsive = {
    xl: {
        breakpoint: {min: 1200, max: 4000},
        items: 8,
        slidesToShow: 8
    },
    lg: {
        breakpoint: {max: 1200, min: 900},
        items: 6,
        slidesToShow: 6
    },
    md: {
        breakpoint: {max: 900, min: 600},
        items: 4,
        slidesToShow: 4
    },
    xs: {
        breakpoint: {max: 600, min: 0},
        items: 2,
        slidesToShow: 2
    }
};


export const UTILS = {
    getInitials,
    responsive
};
