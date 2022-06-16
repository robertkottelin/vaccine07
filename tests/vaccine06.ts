import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Vaccine06 } from "../target/types/vaccine06";

describe("vaccine06", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Vaccine06 as Program<Vaccine06>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
