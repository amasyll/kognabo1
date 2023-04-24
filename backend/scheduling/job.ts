
class job {
    start :number;finish :number;profit :number;
    constructor(start :number, finish :number, profit :number) {
        this.start = start;
        this.finish = finish;
        this.profit = profit;   
   }
}

class jobComparatore {
    /**
     * comparatore
     */
    public compare(a :job, b :job) {
        return a.finish < b.finish ? -1 : a.finish == b.finish ? 0 : 1
    }
}

/**
 * class weitedIntervalScheduling
 */
class weitedIntervalScheduling {
    public static binarySearch(jobs :job[], index :number) :number{
        let low = 0, high = index-1
        while(low <= high) {
            let mid = (low + high) / 2;
            if (jobs[mid].finish <= jobs[index].start) {
                if (jobs[mid + 1].finish <= jobs[index].start) {
                    low = mid + 1;
                } else {
                    return mid    
                }    
            } else {
                high = mid - 1    
            }
        }
        return -1
    }

    public static schedule(jobs :job[]) :number {
        [jobs, new jobComparatore()].sort()
        let n = jobs.length
        let table = new Array<number>(n);
        table[0] = jobs[0].profit;

        for (let i = 0; i < n; i++) {
            let inclProf = jobs[i].profit;
            const l = this.binarySearch(jobs, i);
            if (l != -1) {
                inclProf += table[l];
                table[i]  = Math.max(inclProf, table[i-1])
            }
        }
        return table[n-1]
    }
    /**
     * main 
     */
    public static main (args :string[]) {
      let jobs :job[] =  [new job(1,2,50), new job(3,5,20)]
    
       console.log('Optional profit is' + this.schedule(jobs));
    }
}
module.exports = weitedIntervalScheduling