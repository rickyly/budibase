import { Integration, SourceName } from "@budibase/types"

export interface UIIntegration extends Integration {
  name: SourceName
}
