<template>
<div class="col-group">
    <div class="col"
         v-for="item in colList"
         :key="item.alias"
         :style="{
            left:(item.left - offsetLeft)+'px',
            width: item.width + 'px'}">
    </div>
</div>
</template>
<script type="text/javascript">
export default {
    props: ['frozenRule'],
    data() {
        let startIndex
        let endIndex
        if (this.frozenRule) {
            startIndex = this.frozenRule.startColIndex
            endIndex = this.frozenRule.endColIndex
        }
        return {
            startIndex,
            endIndex
        }
    },
    computed: {
        offsetLeft() {
            if (this.frozenRule) {
                return this.frozenRule.offsetLeft
            } else {
                return 0
            }
        },
        colList() {
            let getters = this.$store.getters
            let cols = getters.colList
            let visibleCols = getters.visibleColList
            let frozenRule = this.frozenRule
            let startColIndex
            let endColIndex
            let lastCol
            let startCol

            if (frozenRule) {
                startColIndex = frozenRule.startColIndex
                if (frozenRule.endColIndex != null) {
                    endColIndex = frozenRule.endColIndex
                } else {
                    endColIndex = cols.length - 1
                }
                startCol = cols[startColIndex]
                lastCol = cols[endColIndex]
                startColIndex = getters.getVisibleColIndexBySort(startCol.sort)
                endColIndex = getters.getVisibleColIndexBySort(lastCol.sort)
                return visibleCols.slice(startColIndex, endColIndex + 1)
            } else {
                return getters.userViewColList
            }
        }
    }
}
</script>
<style type="text/css">
.col-group {
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
}
</style>