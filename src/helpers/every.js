module.exports = function (index_count, offset, mod, block) {
    if (parseInt(index_count + offset)%(mod) === 0) {
        return block.fn(this);
    }
};
