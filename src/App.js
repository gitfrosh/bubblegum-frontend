import "./App.css";
import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContract, useSigner, useAccount } from "wagmi";
import { ethers } from 'ethers';

function App() {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  // const contract = useContract({
  //   addressOrName: "YOUR_SMART_CONTRACT_ADDRESS",
  //   contractInterface: '', // insert abi here
  // });

  const mint = async (event) => {
    event.preventDefault();
    // add minting logic here
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
          <input style={{ width: 200 }} type="number" id="amount" />
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
