import { useClient } from "sanity";
import { ListBuilder } from "sanity/desk";

export const cleanDesk = async (structure: ListBuilder) => {
  const client = useClient({ apiVersion: "vX" });

  const deskConfig = await client.fetch(
    '*[_id == "secret.config_desk"][0] { blacklist }',
  );

  if (!deskConfig?.blacklist) return structure;

  const newStructure = recursivelyRemoveStructureItemsUsingBlackList(
    structure,
    deskConfig.blacklist || [],
  );

  return newStructure;
};

/**
 * Loop over the structure and remove any items that are in the blacklist
 */

function recursivelyRemoveStructureItemsUsingBlackList(
  structure: any,
  blacklist: string[],
) {
  const newStructure = structure;

  if (blacklist.includes(structure.spec?.title)) {
    return null;
  }

  if (structure.spec?.items) {
    const newItems = structure.spec.items.filter((item: any) => {
      return !blacklist.includes(item.spec?.title);
    });

    newStructure.spec.items = newItems.map((item: any) => {
      return recursivelyRemoveStructureItemsUsingBlackList(item, blacklist);
    });
  }

  if (structure.spec?.child) {
    newStructure.spec.child = recursivelyRemoveStructureItemsUsingBlackList(
      structure.spec.child,
      blacklist,
    );
  }

  return newStructure;
}
