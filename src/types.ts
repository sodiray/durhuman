export type UnitOfTime = 'millisecond' 
    | 'milliseconds' 
    | 'second' 
    | 'seconds' 
    | 'minute' 
    | 'minutes' 
    | 'hour' 
    | 'hours' 
    | 'day' 
    | 'days'
    
export type Duration = `${number} ${UnitOfTime}`