// import { render, screen } from "@testing-library/react";
// import Character from "../pages/Character/Character";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "../query-client";
// import { MemoryRouter, Route, Routes } from "react-router";
// import * as services from "../services/characterService";
// import characters from "./mock/characters.json";
// import { ENDPOINTS } from "../services/endpoints";

// describe("Character", () => {
//   it("should show the character banner", async () => {
//     vi.spyOn(services, "getAllCharacters").mockReturnValue(
//       Promise.resolve(characters)
//     );

//     render(
//       <MemoryRouter
//         initialEntries={[ENDPOINTS.CHARACTERS + "/" + characters[0].id]}
//         initialIndex={0}
//       >
//         <QueryClientProvider client={queryClient}>
//           <Routes>
//             <Route path="/locations" element={<Character />} />
//           </Routes>
//         </QueryClientProvider>
//       </MemoryRouter>
//     );
//     screen.debug();
//     const characterName = await screen.findByAltText(characters[0].name);
//     expect(characterName).toBeInTheDocument();
//   });
// });
