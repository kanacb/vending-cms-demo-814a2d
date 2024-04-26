import React, { useState, useRef } from "react";
import { classNames } from "primereact/utils";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

const StatsLayout = (props) => {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);
  const btnRef8 = useRef(null);
  const btnRef9 = useRef(null);
  const btnRef10 = useRef(null);
  const btnRef11 = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  return (
    <div className="py-3 px-1 md:px-6 lg:px-8">
        <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-card shadow-2 border-round">
                    <div className="p-3 flex align-items-start">
                        <img src="/demo/images/blocks/crypto/btc.png" alt="btc" style={{ width: '32px', height: '32px' }} className="mr-2" />
                        <div>
                            <span className="text-700">Bitcoin</span>
                            <div className="text-green-500 text-xl mt-2">+0.53%</div>
                        </div>
                        <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">0.0045 BTC</div>
                    </div>
                    <img src="/demo/images/blocks/graphs/graph-1.svg" alt="graph-1" className="w-full" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-card shadow-2 border-round">
                    <div className="p-3 flex align-items-start">
                        <img src="/demo/images/blocks/crypto/eth.png" alt="eth" style={{ width: '32px', height: '32px' }} className="mr-2" />
                        <div>
                            <span className="text-700">Ethereum</span>
                            <div className="text-green-500 text-xl mt-2">+3.52%</div>
                        </div>
                        <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">25.0985 ETH</div>
                    </div>
                    <img src="/demo/images/blocks/graphs/graph-2.svg" alt="graph-2" className="w-full" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-card shadow-2 border-round">
                    <div className="p-3 flex align-items-start">
                        <img src="/demo/images/blocks/crypto/btc.png" alt="btc" style={{ width: '32px', height: '32px' }} className="mr-2" />
                        <div>
                            <span className="text-700">Dogecoin</span>
                            <div className="text-pink-500 text-xl mt-2">-0.32%</div>
                        </div>
                        <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">59000 DOGE</div>
                    </div>
                    <img src="/demo/images/blocks/graphs/graph-3.svg" alt="graph-3" className="w-full" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-card shadow-2 border-round">
                    <div className="p-3 flex align-items-start">
                        <img src="/demo/images/blocks/crypto/xlm.png" alt="xlm" style={{ width: '32px', height: '32px' }} className="mr-2" />
                        <div>
                            <span className="text-700">Stellar</span>
                            <div className="text-green-500 text-xl mt-2">+0.99%</div>
                        </div>
                        <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">1400 XLM</div>
                    </div>
                    <img src="/demo/images/blocks/graphs/graph-4.svg" alt="graph-4" className="w-full" />
                </div>
            </div>
        </div>
    </div>
        );
};
const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};
const mapDispatch = (dispatch) => ({
  //
});

export default connect(mapState, mapDispatch)(StatsLayout);
