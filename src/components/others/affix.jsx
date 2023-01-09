import { Affix, Button } from 'antd';
import React, { useState } from 'react';
const AffixDiv = () => {
    const [container, setContainer] = useState(null);
    return (
                <Affix target={() => container}>
                    <Button type="primary">Fixed at the top of container</Button>
                </Affix>
    );
};