import "./App.css";
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  usePrepareContractWrite,
  useContractWrite,
  useNetwork
} from "wagmi";

function App() {
  const { chain: activeChain } = useNetwork();
  const [formInput, setFormInput] = useState();
  const contractConfig = {
    address: "0x",
    abi: [
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable"
      }
    ],
  };
  const { config } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
    args: [formInput],
    chainId: activeChain?.id,
  });

  const { write } = useContractWrite(config);

  const mint = async () => {
    write?.();
  };

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
        Connect? {/* insert connect button here!*/}
      </MDBNavbar>

      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">
          The <em>Bubblegum</em> Faucet
        </h1>
        <h4 className="mb-3">Never run out of BBB &hearts;</h4>
        <form onSubmit={mint}>
          <input onChange={(e) => setFormInput(e.target.value)} style={{ width: 200 }} type="number" id="amount" />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            role="button"
          >
            Mint my BBB!
          </button>
        </form>
      </div>
    </header>
  );
}

export default App;
