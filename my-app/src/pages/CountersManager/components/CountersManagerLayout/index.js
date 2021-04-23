import React from 'react';
import { v4 as uuidv4 } from 'uuid'

import FuncCounter from '../../../../hooks/counter/index'

const CounterManagerLayout = ({
    handleCounterCreate,
    handleCountersReset,
    countersList,
    handleCountersRemove,
    handleCountersIncrement,
    handleCountersDecrement,
    handleCountersValueReset,
    sum
}) => {

    return (
        <div>
            <div style={{ marginBottom: 25 }}>
                <button className="btn btn-primary" onClick={handleCounterCreate}>Create counter</button>
                <button className="btn btn-danger" onClick={handleCountersReset}>Reset</button>
            </div>
            <div>
                <p>Counters sum: {sum}</p>
                <p>counters quantity: {countersList.length}</p>
            </div>
            <div>
                {countersList.map((counter, index) => (
                    <div style={{ marginBottom: 10 }} key={uuidv4()}>
                        <FuncCounter
                            countValue={counter.countValue}
                            handleRemove={() => handleCountersRemove(index)}
                            handleIncrement={() => handleCountersIncrement(index)}
                            handleDecrement={() => handleCountersDecrement(index)}
                            handleReset={() => handleCountersValueReset(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CounterManagerLayout;