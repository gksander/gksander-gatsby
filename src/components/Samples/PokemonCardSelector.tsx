import * as React from "react";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  Variants,
} from "framer-motion";
import { FixedAspectRatio } from "../FixedAspectRatio";

type Pokemon = { name: string; id: number; accentColor?: string };
const pokemon: Pokemon[] = [
  { name: "Venasaur", id: 3, accentColor: `rgb(222, 137, 157, 0.5)` },
  { name: "Charizard", id: 6, accentColor: `rgb(242, 235, 153, 0.5)` },
  { name: "Blastoise", id: 9, accentColor: `rgb(243, 235, 164, 0.5)` },
  { name: "Pikachu", id: 25, accentColor: `rgb(253, 240, 124, 0.5)` },
  { name: "Jigglypuff", id: 39, accentColor: `rgb(236, 132, 156, 0.5)` },
  { name: "Snorlax", id: 143, accentColor: `rgb(252, 236, 188, 0.5)` },
  { name: "Dragonite", id: 149, accentColor: `rgb(249, 241, 193, 0.5)` },
  { name: "Mewtwo", id: 150, accentColor: `rgb(207, 171, 206, 0.5)` },
  { name: "Mew", id: 151, accentColor: `rgb(148, 204, 228, 0.5)` },
];

const overlayVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Cards
 */
export const PokemonCardSelector: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon | null>(
    null,
  );

  return (
    <AnimateSharedLayout type="crossfade">
      <div className="w-full relative" style={{ paddingBottom: "100%" }}>
        <div className="absolute inset-0 p-1 grid grid-cols-3 grid-rows-3 gap-1">
          {pokemon.map((pokemon) => (
            <FixedAspectRatio ratio={1} key={pokemon.name}>
              <motion.img
                src={`https://pokedex.gksander.com/img/pokemon-sugimori/${pokemon.id}.png`}
                alt={pokemon.name}
                className="w-full h-full object-contain border-b-4 rounded p-2 cursor-pointer bg-gray-100 hover:shadow"
                style={{ borderBottomColor: pokemon.accentColor }}
                onClick={() => setSelectedPokemon(pokemon)}
                layoutId={pokemon.name}
                whileHover={{
                  y: -5,
                }}
                whileTap={{
                  y: -3,
                }}
                initial={false}
              />
            </FixedAspectRatio>
          ))}
        </div>
        <AnimatePresence>
          {Boolean(selectedPokemon) && (
            <motion.div
              className="absolute inset-0 bg-opacity-50 flex justify-center items-center cursor-pointer"
              onClick={() => setSelectedPokemon(null)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                backgroundColor:
                  selectedPokemon?.accentColor || "rgba(0,0,0,0.5)",
              }}
              exit={{
                opacity: 0,
              }}
              variants={overlayVariants}
            >
              <motion.div
                className="w-1/2 bg-gray-100 p-3 rounded shadow-2xl cursor-auto"
                layoutId={selectedPokemon?.name}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="font-fancy font-thin text-xl mb-3 text-center">
                  {selectedPokemon?.name}
                </div>
                <FixedAspectRatio ratio={1}>
                  <img
                    src={`https://pokedex.gksander.com/img/pokemon-sugimori/${selectedPokemon?.id}.png`}
                    alt={`Pokemon ${selectedPokemon?.name}`}
                    className="w-full h-full object-contain"
                  />
                </FixedAspectRatio>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>
  );
};
